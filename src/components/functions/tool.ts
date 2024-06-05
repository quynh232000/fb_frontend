import moment from "moment";
export const FormMartDateAgo=(date:string)=>{
   let result = moment(date).fromNow()
   result = result.replace('a few seconds ago','vừa xong')
   result =result.replace('ago','trước')
   result =result.replace('a minute','1 phút')
   result =result.replace('minutes','phút')
   result =result.replace('hours','giờ')
   result =result.replace('months','tháng')
   result =result.replace('years','năm')
   return result;
}