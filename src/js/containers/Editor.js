import { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from '../actions/editor';

import EditorHeader from '../components/EditorHeader';
import EditorFooter from '../components/EditorFooter';
import EditorInput from '../components/EditorInput';

const EditorContainer = ({editor, actions}) => {
    console.log(editor, actions);
    return (
        <div>
            <EditorHeader />
            <EditorInput changeHTML={actions.changeHTML}/>
            <EditorFooter changeDecorateType={actions.changeDecorateType} />
        </div>
    );
};

EditorContainer.propTypes = {
    editor: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    editor: state.editor
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(editorActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditorContainer);
