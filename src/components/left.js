import data from "../data/left.json";
const Left = ({radio,setRadio}) => {
  const ChangedState=(e,id)=>{
    setRadio(prev=>prev.position=false)
  if(id==1){
  setRadio({...radio,is_novu:e.target.value});
  }
  else if(id==2){
    setRadio({...radio,is_bacariq:e.target.value})
  }
  else{
    setRadio({...radio,vezife:e.target.value})
  }
  }
  return (
    <div className="left">
      {data.map((datas) => {
        return (
          <div>
            <div>
              <h2>{datas.title}</h2>
            </div>
            <form>
              {datas.items.map((itm) => {
                return (
                  <div>
                    <input
                      type="radio"
                      id={itm.item}
                      name={datas.title}
                      value={itm.item}
                      onChange={(e)=>ChangedState(e,datas.id)}
                    />
                    <label htmlFor={itm.item}>{itm.item}</label>
                  </div>
                );
              })}
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Left;
