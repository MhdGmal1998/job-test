import React, { useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link';
import SEO from '../components/SEO';
import { Button, Container, Box, Typography } from '@mui/material';
import Fade from 'react-reveal/Fade'
import { LetterAnimation } from '../components/Animation';
import { HomeParagraph1, HomeParagraph2 } from '../constants/Porfolio';
import { DataTableDirect, CardDirect } from '../interface';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 5
}

const Home: NextPage = () => {


  return (
    <Box>
      <SEO title="Home page " description="The home page of the post" />
      <Box sx={{ ...style }}>
        <Box>
          <LetterAnimation>
            {HomeParagraph1}
          </LetterAnimation>
        </Box>
        <Fade bottom duration={6000}>
          <Box>
            <Link href={CardDirect}>
              <Button variant='contained'>Display as Cards</Button>
            </Link>
          </Box>
        </Fade>

        <Fade bottom duration={6000}>
          <Box>
            <Link href={DataTableDirect}>
              <Button variant='contained'>Display as Data Table</Button>
            </Link>
          </Box>
        </Fade>

        <Box>
          <LetterAnimation>
            {HomeParagraph2}
          </LetterAnimation>
        </Box>
      </Box>

    </Box>
  )
}
export default Home