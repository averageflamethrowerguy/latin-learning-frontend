import { BrowserRouter, useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {VerbChecks} from "./VerbChecks";
import {Vocabulary} from "./Vocabulary";
import {NounChecks} from "./NounChecks";
import {vocabularyList} from "./vocabularyList";
import {PronounChecks} from "./PronounChecks";

async function getUpdatedWordList() {
	try {
		let cells = await Promise.all(
			[vocabularyList[0]].map(element => {
				return new Promise(async (resolve, reject) => {
					const stuff = await fetch(`https://www.latin-is-simple.com/api/vocabulary/search/?query=${element[1]}&forms_only=false`)
					const data = await stuff.json()
					console.log(data)
					resolve(data)
				})
			})
		)
	}
	catch (err) {
		console.error(err)
	}
}

export function Home() {
	// const cognitoId = "607865"  // 19
	// const cognitoId = "890233"     // matilda
	// const cognitoId = "foo"     // 19
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return (
		<div style={{maxHeight: "100vh", overflow: "scroll"}}>
			<Vocabulary />
			<VerbChecks />
			<NounChecks />
			<PronounChecks />

			<div onClick={getUpdatedWordList}>
				Get the updated word list
			</div>
		</div>

	)
}
