import { CgProfile } from 'react-icons/cg';
export function Form(){
    return(
        <form>
            <div>
                <label >Name</label>
                <div><CgProfile/></div>
                <input type="text" placeholder="Name" />
            </div>
        </form>
    )
}