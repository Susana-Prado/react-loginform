import React from 'react';
import { useForm } from 'react-hook-form';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`,
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
    },
    header: {
      textAlign: 'center',
    },
    card: {
      marginTop: theme.spacing(10),
    },
  })
);

type State = {
  email: string;
  password: string;
};


const Login = () => {
  const classes = useStyles();
  const { handleSubmit, register } = useForm<State>();

  const onSubmit = handleSubmit((data) => {
      console.log(data);
  })

  return (
    <form className={classes.container} onSubmit={onSubmit}>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login" />
        <CardContent>
          <div>
            <TextField
              type="email"
              label="Email"
              placeholder="Email"
              margin="normal"
              {...register('email', { required: true })}
            />
          </div>
          <div>
            <TextField
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              {...register('password', { required: true })}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            type="submit"
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default Login;
