import { Box, Button, Container, Typography, styled } from "@mui/material";
import { useState } from "react";
import quizData, { Question } from "../../quiz-data/Data";
import { useLocation, useNavigate } from "react-router-dom";

interface OptionButtonProps {
  selected: boolean;
  isCorrectAnswer: boolean;
  userAnswer: string;
  correctAnswer: string;
  children: React.ReactNode;
  onClick: () => void;
}

const OuterBox = styled(Box)({
  padding: "20px",
  borderRadius: "8px",
  border: "1.4px solid rgba(255, 255, 255, 0.8)",
  "@media (max-width: 600px)": {
    width: "calc(100vw - 40px)",
    overflowY: "hidden",
  },
});

const OptionButton: React.FC<OptionButtonProps> = ({
  selected,
  isCorrectAnswer,
  userAnswer,
  correctAnswer,
  children,
  onClick,
}) => (
  <Button
    variant="outlined"
    color="inherit"
    style={{
      minWidth: "fit-content",
      width: "100%",
      marginTop: "5px",
      marginBottom: "13px",
      borderRadius: "45px",
      textTransform: "none",
      fontWeight: "bold",
      fontSize: "1.18rem",
      padding: "10px",
      boxShadow: "none",
      transition: "0.3s, color 0.3s",
      borderColor: isCorrectAnswer ? "#08af08" : "#7f9fad",
      borderWidth: "1.8px",
      borderStyle: "solid",
      border: `2px solid ${
        selected ? (userAnswer === correctAnswer ? "green" : "red") : "inherit"
      }`,
      color: isCorrectAnswer
        ? "#08af08"
        : selected
        ? userAnswer === correctAnswer
          ? "08af08"
          : "red"
        : "#b88e66",
    }}
    disabled
    onClick={onClick}
  >
    {children}
  </Button>
);

const QuestionText = styled(Typography)({
  color: "#e2e3e3",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  "@media (max-width: 600px)": {
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
  },
});

const StyledButton = styled(Button)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginTop: "10px",
  borderRadius: "25px",
  fontSize: "1.2rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  boxShadow: "none",
  color: "#6495ed",
});

const QuizReviewPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const location = useLocation();
  const userAnswers = location.state?.userAnswers || [];
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleOptionClick = (index: number) => {
    setCurrentQuestion(index);
  };

  const handleFinishReview = () => {
    // Navigate to the score page
    navigate("/score");
  };

  const question: Question = quizData[currentQuestion];
  const userAnswer = userAnswers[currentQuestion];

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        bgcolor="transparent"
      >
        <Typography variant="h5" component="h1" style={{ color: "white" }}>
          Check Your Answers
        </Typography>
        <OuterBox key={currentQuestion}>
          <QuestionText variant="h5" fontWeight={800} gutterBottom>
            {question.question}
          </QuestionText>
          {question.options.map((option, optionIndex) => (
            <OptionButton
              key={optionIndex}
              selected={userAnswer === option}
              isCorrectAnswer={option === question.correctAnswer}
              userAnswer={userAnswer}
              correctAnswer={question.correctAnswer}
              onClick={() => handleOptionClick(optionIndex)}
            >
              {option}
            </OptionButton>
          ))}
          <StyledButton
            onClick={
              currentQuestion === quizData.length - 1
                ? handleFinishReview
                : handleNextQuestion
            }
          >
            {currentQuestion === quizData.length - 1
              ? "Finish Review"
              : "Next Question"}
          </StyledButton>
        </OuterBox>
      </Box>
    </Container>
  );
};

export default QuizReviewPage;
