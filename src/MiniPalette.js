import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MiniPaletteStyles'

class MiniPalette extends Component {
    render() {
        const { classes, paletteName, emoji, colors } = this.props;
        const  miniColorBoxes = colors.map(color => (
            <div 
                className={classes.miniColor}
                style = {{ backgroundColor: color.color }}
                key= { color.name }
            />
        ));
    
        return (
        <div className={classes.root} onClick={this.handleClick}>
        <div className={classes.colors}>{ miniColorBoxes }</div>
        
        <h5 className={classes.title}>
            {paletteName} 
            <span className={classes.emoji}>
            {emoji}
            </span>
        
        </h5>
        </div>
        )
    }
}

export default withStyles(styles)(MiniPalette);