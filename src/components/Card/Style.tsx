import { createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({

    card: {
        transition: 'all 0.8',
        '&:hover': {
            transition: 'all 0.8',
            boxShadow: theme.shadows.md,
            transform: 'scale(1.02)',
        },
    }


}));

export { useStyles };
