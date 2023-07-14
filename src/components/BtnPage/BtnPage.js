import "./btnPage.css"

const BtnPage = ({ value, eventFN }) => {
    return (
      <button className="btnPage" onClick={()=>{eventFN()}} type="button">
        {value}
      </button>
    );
}
 
export default BtnPage;