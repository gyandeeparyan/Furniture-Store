import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
import { Alert ,AlertTitle } from '@mui/material'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return <>
  <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  Order Placed — <strong>Thanks for Shopping</strong>
</Alert>
</>
}
const Wrapper = styled.div``
export default CheckoutPage
