import { questionnaireRoutes } from "../router/router";
import { useLocation, useNavigate } from "react-router-dom";

export function useQuestionarieStepper (resultPath = '/profile') {
  const location = useLocation()
  const navigate = useNavigate()

  const activeStep = questionnaireRoutes.findIndex(route => route.path === location.pathname)
  const totalSteps = questionnaireRoutes.length

  const goNext = () => {
    if (activeStep === totalSteps -1) return
    navigate(questionnaireRoutes[activeStep + 1].path)
  }

  const goBack = () => {
    if (activeStep === 0) return
    navigate(questionnaireRoutes[activeStep - 1].path)
  }

  const skipAll = () => {
    navigate(resultPath)
  }

  return { activeStep, totalSteps, goNext, goBack, skipAll }
}