import React from 'react'
import Card from '../card/Card'
import styles from './home.module.css'
import { connect } from 'react-redux'
import { removeCharacterAction } from '../../redux/cahrsDuck'



const Home= ({chars, removeCharacterAction})=> {
    function renderCharacter() {
        let char = chars[0]
        return (
            <Card leftClick={nextCharacter} {...char} />
        )
    }
    function nextCharacter(){
        removeCharacterAction();
    }
    return (
        <div className={styles.container}>
            <h2>Personajes de Rick y Morty</h2>
            <div>
                {renderCharacter()}
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        // state.characters.array lo saco del state global (Aqui verificar en el apartado de state con las devTools)
        chars : state.characters.array
    }
}
export default connect(mapStateToProps,{removeCharacterAction})(Home)