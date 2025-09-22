function AddNewNote() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('event : ', e);
    }

    return (
        <div className="add-new-note">
            <h1>Add New Note</h1>
            <form className='note-form' onSubmit={handleSubmit}>
                <input type="text" className='text-field' placeholder='Note Title'/>
                <input type="text" className='text-field' placeholder='Note Description'/>
                <button className='btn btn--primary'>Add New Note</button>

            </form>
        </div>
    )
}export default AddNewNote