import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "../components/Main";
import { Theme } from "../styles/Theme";

describe("Main Component", () => {
  it("퀴즈 시작 버튼과 오답 노트 버튼이 있어야한다.", () => {
		render(
			<Router>
				<ThemeProvider theme={Theme}>
					<Main />
				</ThemeProvider>
			</Router>
		);

		const quizStartButton = screen.getByText("Start");
		const noteButton = screen.getByText("오답 노트");

		expect(quizStartButton).toBeInTheDocument();
		expect(noteButton).toBeInTheDocument();
	});
});
