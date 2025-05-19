import { Box, Button } from "@chakra-ui/react";
import "./App.css";
import { ColorModeButton } from "./components/ui/color-mode";
import { Tooltip } from "./components/ui/tooltip";
import { Toaster, toaster } from "./components/ui/toaster";
function App() {
  return (
    <>
      <Toaster />
      <ColorModeButton />
      <Tooltip content="box description" showArrow>
        <Box>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eaque
          vero eveniet dolorem distinctio autem, totam architecto eum natus,
          nemo qui dolores ipsa laudantium sint est accusantium? Perferendis
          atque ipsam quisquam consequatur voluptatibus possimus qui,
          repudiandae officia minus laborum quasi vel corporis maiores voluptate
          impedit harum cum iusto obcaecati reiciendis quibusdam exercitationem
          sequi recusandae ducimus debitis? Dicta ullam, suscipit dignissimos
          magni quam itaque cumque quia. Ab blanditiis iure tempora facere
          aperiam delectus saepe, distinctio neque, nostrum error quis,
          perferendis eius? Accusamus labore quo deserunt nesciunt ea vero
          dignissimos vitae ratione. Laborum, optio aspernatur necessitatibus
          libero maiores modi laboriosam dolorem minus?
        </Box>
      </Tooltip>
      <Button
        onClick={() =>
          toaster.create({
            title: "Update successful",
            description: "File saved successfully to the server",
            closable: true,
          })
        }
      >
        Save
      </Button>
    </>
  );
}

export default App;
