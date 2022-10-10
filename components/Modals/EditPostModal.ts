import Swal from "sweetalert2"
import { EditPost } from "../../services";
import $ from "jquery";



const EditPostModal = (id, title, body, userId) => Swal.fire({
    title: 'تعديل المنشور',
    html:
        `<textarea id="title" class="swal2-input" placeholder="عنوان البوست" style="resize:none"  rows=${30} cols=${32}>${title}</textarea>
        <textarea  id="body" multipl  class="swal2-input" placeholder="محتوى البوست" style="resize:none"  rows=${30} cols=${32}>${body}</textarea>
        <textarea id="user-id"  class="swal2-input" placeholder="رقم المستخدم" style="resize:none"  rows=${30} cols=${32}>${userId}</textarea>`,
    showCancelButton: true,
    confirmButtonText: 'تعديل',
    cancelButtonText: 'الغاء',
    showLoaderOnConfirm: true,
    preConfirm: () => {
        return new Promise((reslove, reject) => {
            const newTitle = $('#title').val()
            const newBody = $('#body').val()
            const newUserId = $('#user-id').val()
            EditPost(id, newTitle, newBody, newUserId)
                .then((response) => {
                    console.log(response)
                    if (response.status == 200 || response.status == 201)
                        reslove(response)
                    else
                        reject("Unkown Error")
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    ,
    allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire('تم الحفظ بنجاح!', '', 'success')
    }
    else {
        Swal.fire('لم يتم حفظ التغيرات', '', 'info')
    }
}).catch((error) => {
    Swal.fire(
        'تم الإلغاء',
        'حصل خطأ غير معروف',
        'error'
    )
})
export default EditPostModal