import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  //   padding: grid * 2,
  //   margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid
});

class DragDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        // { id: "1", label: "hello" },
        // { id: "2", label: "hello 2" }
      ]
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {
    const items = this.props.data;
    this.setState({ items });
  }
  componentWillReceiveProps() {
    const items = this.props.data;
    this.setState({ items });
  }

  onDragEnd(result) {
    // dropped outside the list
    this.props.onDrag(result);
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <div class="media border p-3">
                        <div class="mediaIcon border">
                          <i class={"fa " + item.icon}></i>
                        </div>
                        <div class="media-body">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                        <div class="moveIcon">
                          <i class="fa fa-arrows-v"></i>
                        </div>
                        <div class="contentItemAction">
                          <div role="toolbar" class="btn-toolbar">
                            <button type="button" class="btn btn-dark btn-sm">
                              <i class="fa fa-pencil"></i>
                            </button>
                            <button
                              type="button"
                              class="ml-2 btn btn-dark btn-sm"
                            >
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default DragDrop;
