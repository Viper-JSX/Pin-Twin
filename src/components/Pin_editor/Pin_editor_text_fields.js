function PinEditorTextFields({ pinData, handlePinTitleChange, handlePinDiscriptionChange, handlePinTagsChange }){
    return(
        <div className="pinEditorTextFields">
            <input type="text" value={pinData.title} placeholder="Title" onChange={handlePinTitleChange} />
            <textarea value={pinData.discription} placeholder="Discription" onChange={handlePinDiscriptionChange} ></textarea>
            <input type="text" value={pinData.tagsString} placeholder="Tags" onChange={handlePinTagsChange} />
        </div>
    );
}

export default PinEditorTextFields;