import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    avatar: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  })
)

export default useStyles;