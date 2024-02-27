import { BrowserRouter, useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {AdjAdverbChecks} from "./AdjAdverbChecks";
import {Vocabulary} from "./Vocabulary";
import {NounChecks} from "./NounChecks";
import {PronounChecks} from "./PronounChecks";
import {VerbChecks} from "./VerbChecks";

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
			<AdjAdverbChecks />
			<PronounChecks />
		</div>

	)
}
