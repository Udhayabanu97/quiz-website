import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Container,
  Box,
  LinearProgress,
} from "@mui/material";
import { styled } from "@mui/material";
import quizData from "../../quiz-data/Data";

const OuterBox = styled(Box)({
  padding: "20px",
  borderRadius: "8px",
  border: "1.4px solid rgba(255, 255, 255, 0.8)",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  "@media (max-width: 600px)": {
    width: "calc(100vw - 40px)",
  },
});

const OptionButton = styled(Button)({
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
});

const QuestionText = styled(Typography)({
  color: "#e2e3e3",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  "@media (max-width: 600px)": {
    whiteSpace: "pre-wrap", // Preserve line breaks
    overflowWrap: "break-word", // Allow word-breaking
  },
});

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) =>
        prevTimeLeft > 0 ? prevTimeLeft - 1 : prevTimeLeft
      );
      if (timeLeft === 0) {
        clearInterval(timer);
        window.alert("Oops!! Time's up");
        handleNextQuestion(""); // Move to the next question when time runs out
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const handleNextQuestion = (answer: string) => {
    const updatedAnswers = [...userAnswers, answer];
    setUserAnswers(updatedAnswers);
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimeLeft(15);
    } else {
      navigate("/score", { state: { userAnswers: updatedAnswers } });
    }
  };

  const totalQuestions = quizData.length;

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
        <Typography variant="h4" my={2} gutterBottom style={{ color: "white" }}>
          Quiz
        </Typography>
        <OuterBox>
          <Typography
            variant="body1"
            textAlign="center"
            style={{ marginTop: "-10px", color: "#c9c8c8" }}
          >
            Time Left: <strong>{timeLeft}s</strong>
          </Typography>
          <LinearProgress
            variant="buffer"
            color="error"
            value={(1 - timeLeft / 15) * 100}
            valueBuffer={100}
            style={{ marginBottom: "8px" }}
          />
          <QuestionText variant="h5" fontWeight={800} gutterBottom>
            {quizData[currentQuestion].question}
          </QuestionText>
          {quizData[currentQuestion].options.map((option, index) => (
            <OptionButton
              size="large"
              key={index}
              variant="outlined"
              style={{
                color: "#f70271aa",
                borderColor: "#408b8b",
                borderWidth: "1.8px",
              }}
              onClick={() => handleNextQuestion(option)}
            >
              {option}
            </OptionButton>
          ))}
          <Typography variant="body2" textAlign="center" color="white">
            {currentQuestion} of {totalQuestions} questions
          </Typography>
        </OuterBox>
      </Box>
    </Container>
  );
};

export default QuizPage;
