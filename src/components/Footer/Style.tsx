import { createStyles } from "@mantine/core";
const useStyles = createStyles(() => ({
    link: {
        display: 'block',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        '&:hover': {
            textDecoration: 'underline'
        }
    }


}));

export { useStyles };
