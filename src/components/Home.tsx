import { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useGetRoomQuery, useGetUserQuery } from "../services/api";
import { wordList } from "./wordConfiguration";
import {EnglishToLatinMultipleChoice} from "./EnglishToLatinMultipleChoice";
import {LatinToEnglishMultipleChoice} from "./LatinToEnglishMultipleChoice";
import {LatinToLatin} from "./LatinToLatin";
import {EnglishToLatinFreeResponse} from "./EnglishToLatinFreeResponse";

export function Home() {
	// const cognitoId = "607865"  // 19
	// const cognitoId = "890233"     // matilda
	// const cognitoId = "foo"     // 19
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	/**
	 * Learning Levels:
	 * 1. English to Latin (multiple choice)
	 * 2. Latin to English (multiple choice)
	 * 3. Latin to Latin (if multiple forms exist, typed out)
	 * 4. English to Latin (typed out, always the first form)
	 * 5. Probationary State (run Test #4 again, if failed go to State 4, else State 6)
	 * 6. Known word
	 */
	const [ learningLevelsMap, setLearningLevelsMap ] = useState(Object.fromEntries(wordList.map(wordArray => {
		return [wordArray[0], {learningLevel: 1, latin: wordArray.slice(1, wordArray.length)}]
	})))
	const [ currentIndex, setCurrentIndex ] = useState(0);

	const currentWord = wordList[currentIndex]
	const currentLevel = learningLevelsMap[currentWord[0]].learningLevel

	const updateIndex = () => {
		let tempIndex = currentIndex;
		// skip any indexes with a level of 6
		while (learningLevelsMap[wordList[(tempIndex += 1) % wordList.length][0]].learningLevel === 6) {
			if (tempIndex === currentIndex) {
				console.log("ALL WORDS LEARNED");
				break;
			}
		}
		setCurrentIndex(tempIndex)
	}

	let componentToRender
	switch (currentLevel) {
		case 1:
			componentToRender = <EnglishToLatinMultipleChoice wordList={wordList} currentWord={currentWord} updateLevel={
				(success) => {
					let newLearningLevelsMap = Object.fromEntries(Object.entries(learningLevelsMap));
					newLearningLevelsMap[currentWord[0]].learningLevel += success ? 1 : 0;
					setLearningLevelsMap(newLearningLevelsMap)
				}
			} updateCurrentIndex={updateIndex} />
			break;
		case 2:
			componentToRender = <LatinToEnglishMultipleChoice wordList={wordList} currentWord={currentWord} updateLevel={
				(success) => {
					let newLearningLevelsMap = Object.fromEntries(Object.entries(learningLevelsMap));
					newLearningLevelsMap[currentWord[0]].learningLevel += success ?
						(newLearningLevelsMap[currentWord[0]].latin.length > 1 ? 1 : 2)
						: 0;
					setLearningLevelsMap(newLearningLevelsMap)
				}
			} updateCurrentIndex={updateIndex} />
			break;
		case 3:
			componentToRender = <LatinToLatin wordList={wordList} currentWord={currentWord} updateLevel={
				(success) => {
					let newLearningLevelsMap = Object.fromEntries(Object.entries(learningLevelsMap));
					newLearningLevelsMap[currentWord[0]].learningLevel += success ? 1 : 0;
					setLearningLevelsMap(newLearningLevelsMap)
				}
			} updateCurrentIndex={updateIndex} />
			break;
		case 4:
			componentToRender = <EnglishToLatinFreeResponse wordList={wordList} currentWord={currentWord} updateLevel={
				(success) => {
					let newLearningLevelsMap = Object.fromEntries(Object.entries(learningLevelsMap));
					newLearningLevelsMap[currentWord[0]].learningLevel += success ? 1 : 0;
					setLearningLevelsMap(newLearningLevelsMap)
				}
			} updateCurrentIndex={updateIndex} />
			break;
		case 5:
			componentToRender = <EnglishToLatinMultipleChoice wordList={wordList} currentWord={currentWord} updateLevel={
				(success) => {
					let newLearningLevelsMap = Object.fromEntries(Object.entries(learningLevelsMap));
					newLearningLevelsMap[currentWord[0]].learningLevel += success ? 1 : -1;
					setLearningLevelsMap(newLearningLevelsMap)
				}
			} updateCurrentIndex={updateIndex} />
			break;
	}

	return (
		<div>
			<div>
				{componentToRender}
			</div>
		</div>
	)
}
