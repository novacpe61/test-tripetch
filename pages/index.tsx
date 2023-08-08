import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Box, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Breakpoint, Theme, useTheme } from '@mui/material/styles'
import StepperDots from '@components/StepperDots'

type BreakpointOrNull = Breakpoint | null

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://legacy.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
function useWidth() {
  const theme: Theme = useTheme()
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse()
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key))
      return !output && matches ? key : output
    }, null) || 'xs'
  )
}


const paragraph = [
  {
    subject: "ATHLETS",
    section: [
      {
        number: '01',
        name: "CONNECTION",
        text: "Connect with coaches directly, you can ping coaches to view profile."
      },
      {
        number: '02',
        name: "COLLABORATION",
        text: "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1."
      },
      {
        number: '03',
        name: "GROWTH",
        text: "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc "
      },
    ]
  },
  {
    subject: "PLAYERS",
    section: [
      {
        number: '01',
        name: "CONNECTION",
        text: "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1."
      },
      {
        number: '02',
        name: "COLLABORATION",
        text: "Work with recruiter to increase your chances of finding talented athlete."
      },
      {
        number: '03',
        name: "GROWTH",
        text: "Save your time, recruit proper athlets for your team."
      },
    ]
  },
]

export default function Home() {
  const width = useWidth()

  const styleTextParagraph = {
    fontWeight: 400, fontSize: 20, mt: 2
  }

  const styleTextRow = {
    pb: 7
  }

  const columnWidth = {
    left: 6.5,
    right: 4.5
  }

  return (
    <Container maxWidth={false} disableGutters>
      {width != 'xs' ? (
        <>
          <div style={{ position: "relative" }}>
            <Grid container sx={{ ...styleTextRow }}>
              <Grid item lg={columnWidth.left} sm={5}>
              </Grid>
              <Grid item lg={columnWidth.right} sm={7}>
                <Typography sx={{ fontWeight: 400, fontSize: 90, color: "#E7E7E7" }}>{paragraph[0].subject}</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ ...styleTextRow }}>
              <Grid item lg={columnWidth.left} sm={5}>
              </Grid>
              <Grid item lg={columnWidth.right} sm={7}>
                <Stack spacing={3}>
                  <Stack direction="row" spacing={2} alignItems="top">
                    <Typography className='remark-before' sx={{ fontWeight: 400, fontSize: 20 }}>{paragraph[1].section[0].number}</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: 36, color: "#C2C2C2" }}>{paragraph[0].section[0].name}</Typography>
                  </Stack>
                  <Typography className='content' sx={{ ...styleTextParagraph }}>{paragraph[0].section[0].text}</Typography>
                </Stack>
              </Grid>
            </Grid>
            <Grid container sx={{ ...styleTextRow, backgroundColor: "#F5F4F9" }} height={250} alignContent={"center"}>
              <Grid item lg={columnWidth.left} sm={5}>
              </Grid>
              <Grid item lg={columnWidth.right} sm={7}>
                <Stack sx={{ pt: 6 }}>
                  <Stack direction="row" spacing={2} alignItems="top">
                    <Typography className='remark-before' sx={{ fontWeight: 400, fontSize: 20 }}>{paragraph[1].section[1].number}</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: 36, color: "#C2C2C2" }}>{paragraph[0].section[1].name}</Typography>
                  </Stack>
                  <Typography className='content' sx={{ ...styleTextParagraph }}>{paragraph[0].section[1].text}</Typography>
                </Stack>
              </Grid>
            </Grid>
            <Grid container sx={{ ...styleTextRow, backgroundColor: "#5E3DB3" }} height={250} alignContent={"center"}>
              <Grid item lg={columnWidth.left} sm={5}>
              </Grid>
              <Grid item lg={columnWidth.right} sm={7}>
                <Stack sx={{ pt: 6 }}>
                  <Stack direction="row" spacing={2} alignItems="top">
                    <Typography className='remark-before last' sx={{ fontWeight: 400, fontSize: 20 }}>{paragraph[1].section[2].number}</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: 36, color: "#C2C2C2" }}>{paragraph[0].section[2].name}</Typography>
                  </Stack>
                  <Typography className='content' sx={{ ...styleTextParagraph, color: '#FFFFFF' }}>{paragraph[0].section[2].text}</Typography>
                </Stack>
              </Grid>
            </Grid>
            <div className='drawing-img-1'>
              <div className='effect4' />
              <div className='effect5' />
              <Image
                src="/assets/footballer_1.png"
                width={678}
                height={950}
                alt="Picture of the author"
                className='img-1'
              />
            </div>
          </div>
          <div className='section2' style={{ position: "relative", overflowX: 'hidden' }}>
            <Grid container>
              <Grid item lg={2} sm={.5}>
              </Grid>
              <Grid item lg={4.5} sm={7}>
                <Stack spacing={3}>
                  <Typography sx={{ fontWeight: 400, fontSize: 90, color: "#E7E7E7" }}>{paragraph[1].subject}</Typography>
                  <Stack direction="row" spacing={2} alignItems="top">
                    <Typography className='remark-before' sx={{ fontWeight: 400, fontSize: 20 }}>{paragraph[1].section[0].number}</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: 36, color: "#C2C2C2" }}>{paragraph[1].section[0].name}</Typography>
                  </Stack>
                  <Typography className='content' sx={{ ...styleTextParagraph }}>{paragraph[1].section[0].text}</Typography>
                </Stack>
              </Grid>
            </Grid>
            <Grid container sx={{ ...styleTextRow, backgroundColor: "#F5F4F9" }} height={250} alignContent={"center"}>
              <Grid item lg={2} sm={.5}>
              </Grid>
              <Grid item lg={4.5} sm={6}>
                <Stack sx={{ pt: 6 }}>
                  <Stack direction="row" spacing={2} alignItems="top">
                    <Typography className='remark-before' sx={{ fontWeight: 400, fontSize: 20 }}>{paragraph[1].section[1].number}</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: 36, color: "#C2C2C2" }}>{paragraph[1].section[1].name}</Typography>
                  </Stack>
                  <Typography className='content' sx={{ ...styleTextParagraph }}>{paragraph[1].section[1].text}</Typography>
                </Stack>
              </Grid>
            </Grid>
            <Grid container sx={{ ...styleTextRow, backgroundColor: "#090C35" }} height={250} alignContent={"center"}>
              <Grid item lg={2} sm={.5}>
              </Grid>
              <Grid item lg={4.5} sm={7}>
                <Stack sx={{ pt: 6 }}>
                  <Stack direction="row" spacing={2} alignItems="top">
                    <Typography className='remark-before last purple-text' sx={{ fontWeight: 400, fontSize: 20 }}>{paragraph[1].section[2].number}</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: 36, color: "#C2C2C2" }}>{paragraph[1].section[2].name}</Typography>
                  </Stack>
                  <Typography className='content' sx={{ ...styleTextParagraph, color: '#FFFFFF' }}>{paragraph[1].section[2].text}</Typography>
                </Stack>
              </Grid>
            </Grid>
            <div className='drawing-img-2'>
              <div className='effect1' />
              <div className='effect2' />
              <Image
                src="/assets/basketball_1.png"
                width={991}
                height={815}
                alt="Picture of the author"
                className='img-2'
              />
              <div className='effect3' />
            </div>
          </div>
        </>
      ) : (
        <div style={{ overflowX: 'hidden' }}>
          <Box style={{ position: 'relative' }}>
            <Typography sx={{ fontWeight: 400, fontSize: 50, color: "#E7E7E7", ml: 3, mb: 30 }}>{paragraph[0].subject}</Typography>
            <div className='drawing-img-1-mobile'>
              <div className='effect1-mobile' />
              <div className='effect2-mobile' />
              <Image
                src="/assets/footballer_1.png"
                width={200}
                height={281}
                alt="Picture of the author"
                className='img-blue-mobile'
              />
            </div>
          </Box>
          <StepperDots
            paragraph={paragraph[0].section}
          />
          <Box style={{ position: 'relative' }}>
            <Typography sx={{ fontWeight: 400, fontSize: 50, color: "#E7E7E7", ml: 3, mb: 30 }}>{paragraph[1].subject}</Typography>
            <div className='drawing-img-2-mobile'>
              <div className='effect1-mobile' />
              <div className='effect2-mobile' />
              <div className='effect3-mobile' />
              <Image
                src="/assets/basketball_1.png"
                width={302}
                height={249}
                alt="Picture of the author"
                className='img-red-mobile'
              />
            </div>
          </Box>
          <StepperDots
            paragraph={paragraph[1].section}
          />
        </div>
      )}
    </Container>
  )
}
