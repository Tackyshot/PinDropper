import Alt          from '../alt.jsx';
import NotesActions    from 'actions/notes.actions.js';
import _            from 'lodash';

class NotesStore {
  constructor(){
    this.bindListeners({
      set: NotesActions.get,
      put: NotesActions.put,
      post: NotesActions.post,
      del: NotesActions.del
    });

    this.state = {
      notes: []
    };

    this.invSchema = [
      {
        type: 'prebaked',
        notes:[
          {
            title: 'general',
            private: false,
            description: ''
          },
          {
            title: 'private',
            private: true,
            description: ''
          }
        ]
      },
      {
        type: 'custom',
        notes: [
          {
            title: '',
            private: false,
            description: ''
          }
        ]
      }
    ]//schema


  }//constructor

  set(notes){
    if(notes !== null){
      this.setState({
        notes: notes
      });
    }
  }//set

  put(noteItem){
    if(noteItem !== null) {
      let newInv = _.clone(this.state.notes, true);

      //find and replace notes item with new data
      newInv.forEach((item, index)=>{
        if(item._id === noteItem._id){
          newInv[index] = noteItem;
          this.setState({
            notes: newInv
          });
        }
      });
    }
  }//put

  post(noteItem){
    if(noteItem !== null){
      let newInv = _.clone(this.state.notes, true);

      newInv.push(noteItem);
      this.setState({
        notes: newInv
      });
    }
  }

  del(noteItem){
    if(noteItem !== null){
      let newInv = _.clone(this.state.notes, true);

      //find and remove notes item.
      newInv.forEach((item, index)=>{
        if(item._id === noteItem._id){
          newInv.splice(index, 1);
          this.setState({
            notes: newInv
          });
        }
      });
    }
  }

}

export default Alt.createStore(NotesStore);