import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListComponent from './ListComponent';

const TodoList = () => {
    const [item, setItem] = useState('');
    const [newitem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    };

    const listOfItems = () => {
        setNewItem((oldValue) => {
            return [...oldValue, item];
        });
        setItem(' ');
    };

    return(
        <>
          <div className="main_div">
              <div className="center_div">
                 <br/>
                 <h1>TODO LIST</h1>
                 <input type="text" value={item} placeholder="Add an item" onChange={itemEvent} />
                 <Button className="newBtn" onClick={listOfItems}>
                    <AddIcon />
                 </Button>

                 <br />
                 <ol>
                     {newitem.map((val, index) => {
                        return <ListComponent key={index} text={val}/>;
                     })}
                 </ol>
              </div>
          </div>
        </>
    );
};

export default TodoList;
