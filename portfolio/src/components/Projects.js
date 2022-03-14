import React from 'react'
import dndApi from '../dndApi/dndApi'
import Select from 'react-select'



class Project extends React.Component {
  state = {

    options : [],

    spells: []
  }
  constructor(props) {
    super(props)
  }


  async componentDidMount() {
    console.log('mounted')

    const res = await dndApi.get('spells')
    /*
    example repsonse shape
      {
        data: {
          count: 319,
          results: [
            {
              index: "acid-arrow",
              name: "Acid Arrow",
              url: "..",
            }
          ]
        }
      }
    */

    console.log('SPELLS !!!', res.data.results)

    this.setState({
      spells: res.data.results,
      options: res.data.results.map((spell, i) => {
     console.log(i, spell)
        // label like an display
        // value like an id
        return {
          label: spell.name,
          value: spell.index
        }
      })
    })


  }

  render() {
    return (
      <div id="projects">


<Select options={this.state.options} />
      <hr />
        <div className="card-deck">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Spell</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Armor</h4>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Class</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
          </div>
        </div>
        <hr />


      </div>
    );
  }

} 

export default Project



