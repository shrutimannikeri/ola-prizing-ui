### ola ride display
 1. App component--> list of cabs (aray of object)
 2. created new componet ride detail and calling this component in APP-
     <Cablist cablist={rides} />
 3. created one more componet to disply each cab .its call in in Cablist        component  with help of map 
        {cablist.map((cabs, ind) => (
        <Cabdisplay cab={cabs} />
      ))}
 4. Cabdisplay--> its dislpa all cab info
 5. PriceDetail component helps disply prize of cab we calling this component inside Cabdisplay components

 
2.automatica deployment-netlify
    1 netlify login
    2.connect to github
    3.CL=false npm run build
