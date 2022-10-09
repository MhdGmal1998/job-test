import React, { useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import Link from 'next/link';
import SEO from '../components/SEO';
import { Button, Container } from '@mui/material';
import AppWithUI from '../components/HomeAnimation';
import { Flip } from 'react-reveal'
import useWindowDimensions from '../hooks/useWindowDimensions';
const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  const { height, width } = useWindowDimensions()
  return (
    <div className={styles.container}>
      <SEO title="Home page " description="The home page of the post" />

      <Container fixed sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        height: height,
        gap: 5
      }}>
        <Flip bottom opposite duration={1000} style={{
          innerWidth: width,
          outerWidth:width
        }}>
          <Link href={{
            pathname: '/post',
            query: {
              option: 'cards'
            }
          }}>

            <Button variant='contained'>Display as Cards</Button>
          </Link>
        </Flip>
        <Link href={{
          pathname: '/post',
          query: {
            option: 'datatable'
          }
        }}>

          <Button variant='contained'>Display as Data Table</Button>
        </Link>
      </Container>

      {/* <AppWithUI /> */}

    </div>
  )
}
export default Home