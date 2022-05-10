import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactiveEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={s.status_block}>
                {!this.state.editMode &&
                    <div>
                        <span className={s.status_editModeOff} onDoubleClick={this.activeEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input className={s.status_editModeOn} autoFocus={true} onBlur={this.deactiveEditMode} value={this.props.status} />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;