import { useState } from "react";
// #next :
// import getConfig from 'next/config';
import { useRouter } from "next/router";
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  TextField,
  FormControl,
  IconButton,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// #other :

const useStyles = makeStyles((theme) => ({
  TextField: {
    "& .Mui-focused .MuiOutlinedInput-notchedOutline,.MuiOutlinedInput-notchedOutline": {
      borderRadius: 0,
      border: 0,
      borderLeft: "5px solid black",
      borderBottom: "5px solid black",
    },
    "& .MuiInputBase-input": {
      fonSize: "10px",
      textTransform: "uppercase",
      fontWeight: "bold",
      color: theme.palette.primary.light,
      letterSpacing: 1,
    },
  },
  iconButton: {
    backgroundColor: "black",
    borderRadius: 0,
    margin: theme.spacing(0, 0.5),
  },
  icon: {
    color: "white",
  },
}));

const Ss_Search = (props) => {
  const { classes, search } = props;
  const localClasses = useStyles();
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSearchTextValueChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearchTextValue = () => {
    setSearchText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearSearchTextValue();
    router.push(`/search/${searchText}`);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit} className={localClasses.form}>
        <Box display="flex" flexDirection="row">
          <FormControl fullWidth>
            <TextField
              InputLabelProps={{
                shrink: false,
              }}
              disableunderline="true"
              variant={search.variant}
              name={search.name}
              required
              id={search.idName}
              autoComplete="off"
              placeholder={search.placeholder}
              className={localClasses.TextField}
              value={searchText}
              onChange={handleSearchTextValueChange}
            />
          </FormControl>
          <IconButton className={localClasses.iconButton} type="submit">
            <SearchIcon className={localClasses.icon} />
          </IconButton>
        </Box>
      </form>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Ss_Search);
