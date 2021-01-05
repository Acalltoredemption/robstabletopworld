import React from 'react';

const MakeBlog = () => {

    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="file" onChange={onChange} />
                <input type="text" name="author" placeholder="AUTHOR NAME" />
                <button>Submit</button>
            </form>
            <ul>
                <li>---</li>
            </ul>
        </div>
    );
}

export default MakeBlog