import { Box, MobileStepper, Paper, Stack, Typography } from "@mui/material"
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Breakpoint, Theme, useTheme } from '@mui/material/styles'
import React from "react"


const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

interface SectionType {
  number: string
  name: string
  text: string
}

interface PropsType {
  paragraph: SectionType[]
}

export default function StepperDots(props: PropsType) {
  const { paragraph } = props
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = paragraph.length

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'end',
          height: 100,
          pl: 2,
          bgcolor: '#F5F4F9',
        }}
      >
        <Stack direction="row" spacing={2} alignItems="top">
          <Typography className='remark-before' sx={{ fontWeight: 400, fontSize: 14 }}>{paragraph[activeStep].number}</Typography>
          <Typography sx={{ fontWeight: 400, fontSize: 28, color: "#C2C2C2" }}>{paragraph[activeStep].name}</Typography>
        </Stack>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {paragraph.map((step, index) => (
          <div key={step.name}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box sx={{ height: 130, fontSize: 15, width: '100%', p: 2, backgroundColor: '#F5F4F9' }}>
                {paragraph[activeStep].text}
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={<div></div>}
        backButton={<></>}
      />
    </Box>
  )
}