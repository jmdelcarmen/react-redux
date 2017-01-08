import { renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
    //initialize component 
    let component;
    beforeEach(() => { //runs before each 'it' helper
        component = renderComponent(CommentBox);
    });

    it('has a text area', () => {
        //using jquery selectors
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    it('has class name "comment-box"', () => {
        //component refers to the top-level div
        expect(component).to.have.class('comment-box');
    });

    describe('entering some text', () => {
        beforeEach(() => {
            //simulates fake events
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows text that in the textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        }); 

        it('when submitted, clears the input', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});