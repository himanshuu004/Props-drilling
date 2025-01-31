import React from 'react'
import Card from './assets/Components/Card'

const App = () => {

    const userdata = [
        {
          "name": "John Doe",
          "age": 30,
          "profession": "Software Developer",
          "photo": "https://example.com/photo1.jpg"
        },
        {
          "name": "Jane Smith",
          "age": 28,
          "profession": "Graphic Designer",
          "photo": "https://example.com/photo2.jpg"
        },
        {
          "name": "Sam Johnson",
          "age": 35,
          "profession": "Product Manager",
          "photo": "https://example.com/photo3.jpg"
        },
        {
          "name": "Lisa Brown",
          "age": 24,
          "profession": "UX Designer",
          "photo": "https://example.com/photo4.jpg"
        },
        {
          "name": "Michael White",
          "age": 40,
          "profession": "Data Scientist",
          "photo": "https://example.com/photo5.jpg"
        }
      ]
      
    
  return (
    <div>
      <div className='h-147.5 w-full p-10 bg-green-200'>
        {userdata.map(function(elem,idx){
            return <Card key={idx} username={elem.name} age={elem.age} prof={elem.profession} photo={elem.photo} />
        })}
      </div>
    </div>
  )
}

export default App  

