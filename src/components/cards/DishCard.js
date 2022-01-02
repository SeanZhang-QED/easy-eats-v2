import React, {useState} from 'react';
import theme from "../../theme";
import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    Fab,
    IconButton,
    Stack,
    ThemeProvider,
    Typography
} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles } from '@mui/styles';


function DishCard(props) {

    const {item} = props;
    const [shadow, setShadow] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <Card
                elevation={shadow}
                onMouseOver={()=>{setShadow(8)}}
                onMouseOut={()=>{setShadow(0)}}
            >
                <CardActionArea>
                    <CardActions >
                        <IconButton aria-label="add"
                             sx={{ position: 'absolute', top: 16, right: 16  }}>
                            <AddCircleIcon color='secondary' fontSize="large"/>
                        </IconButton>
                    </CardActions>
                    <Stack>
                        <CardMedia
                            component="img"
                            image={item.imageUrl}
                            sx={{maxWidth:'283', maxHeight:'188'}}
                        />
                        <Box ml={2}>
                            <Typography variant="body1" component="div" align='left' noWrap>
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align='left'>
                                {`$${item.price}`}
                            </Typography>
                        </Box>
                    </Stack>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
}

export default DishCard;