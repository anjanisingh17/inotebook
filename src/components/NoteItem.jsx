import React from 'react'

function NoteItem(props) {
const {note} = props

  return (
   <>
   <div className='col-md-3 col-lg-3 col-sm-3'>
    <div className="card bg-success my-2" >
      <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo eius dolorum rem fugiat! Iste, quam eligendi? Sunt ratione, consequatur iusto ipsum quibusdam alias, dignissimos earum molestiae in incidunt eligendi, amet minus itaque quia assumenda recusandae provident labore rem eius perferendis consequuntur hic. Harum molestiae sint hic quas maxime laudantium dolores aut adipisci repellendus consectetur optio ducimus ea vitae eaque aliquid eius amet, accusantium tempore iure, necessitatibus voluptatum recusandae quaerat iste tempora? Harum ipsum cupiditate consequatur deleniti ex beatae dicta at sint magnam. Tempora soluta beatae ex voluptatem sequi atque, voluptate earum provident velit obcaecati est quod quas eius maxime!</p>
      </div>
    </div>
    </div>
   </>
  )
}

export default NoteItem