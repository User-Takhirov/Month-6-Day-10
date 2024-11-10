import React from "react";
import { usePhoneSearch } from "../../Service/Query/usePhoneSearch";
import { Stack, TextField } from "@mui/material";
import { useDebounce } from "../../Hooks/useDebounce";
export const PhoneSearch = () => {
  const [input, setinput] = React.useState("");
  const debounceValue = useDebounce(input);
  const { data, isLoading } = usePhoneSearch(debounceValue);
  return (
    <>
      <Stack p={"30px"} position={"relative"}>
        <TextField value={input} onChange={(e) => setinput(e.target.value)} />
        {!isLoading && (
          <Stack boxShadow={"0px 0px 99px -9px rgba(161,137,161,1)"}>
            {data.map((item) => (
              <Stack
                direction={"row"}
                alignItems={"center"}
                p="20px"
                border={"1px solid grey"}
                key={item.id}
              >
                <img style={{ width: "150px" }} src={item.img} />
                <h3>{item.title}</h3>
              </Stack>
            ))}
          </Stack>
        )}
      </Stack>
    </>
  );
};
