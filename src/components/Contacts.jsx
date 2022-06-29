import React from 'react'

function Contacts() {
  return (
    <section id='contacts'>
        <div className='box bg4'>
          <form>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder='Enter your name' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea cols="30" rows="15" placeholder='Enter your message'></textarea>
                    </div>
                    <div className="bottom">
                        <button className="btn btn-dark">Submit</button>
                    </div>
            </form>
        </div>
    </section>
  )
}

export default Contacts