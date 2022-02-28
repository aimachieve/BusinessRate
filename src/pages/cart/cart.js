import * as React from 'react';
import {Badge} from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useCart from '../../hooks/useCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadges() {
  const { count } = useCart();
  console.log(count)

  return (
    <IconButton href="/cart" aria-label="cart" sx={{mt: 1}}>
      <StyledBadge badgeContent={count} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
