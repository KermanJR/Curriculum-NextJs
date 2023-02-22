import Box from "@src/theme/components/Box/Box";
import Button from "@src/theme/components/Button/Button";
import Icon from "@src/theme/components/Icon/Icon";

export default function SideMenu(){

  function openSideMenu(){
    let menu = window.document.querySelector('.box-menu');
    menu.classList.add('active-smooth')
  }
  return(
    <Box
      className="box-menu"
      styleSheet={{
        width: '15%',
        height: '100%',
        position: 'absolute',
        left: '-12rem',
        border: '1px solid red',
        display: 'flex',
        justifyContent: 'end',
        flexDirection: 'row',
        alignItems: 'start'
      }}
    >

      <Button
        onClick={(e)=>openSideMenu}
      >
        <Icon 
          name="arrow" 
          styleSheet={{
            marginTop: '1rem',
            border: '1px solid red',
            width: '56px',
          }}
        />
      </Button>
    
    </Box>
  )
}
