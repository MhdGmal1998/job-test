import Swal from "sweetalert2"
import { AddPost } from "../../services";
import $ from "jquery";

const html =
    `<textarea id="title" class="swal2-input" placeholder="عنوان البوست" style="resize:none"  rows=${30} cols=${32}></textarea>
<textarea  id="body" multipl  class="swal2-input" placeholder="محتوى البوست" style="resize:none"  rows=${30} cols=${32}></textarea>
<textarea id="user-id"  class="swal2-input" placeholder="رقم المستخدم" style="resize:none"  rows=${30} cols=${32}></textarea>`

const AddPostModal = () => Swal.fire({
    title: 'إضافة بوست جديد',
    html,
    showCancelButton: true,
    confirmButtonText: 'إضافة',
    showLoaderOnConfirm: true,
    cancelButtonText: 'إلغاء',
    preConfirm: () => {
        return new Promise((reslove, reject) => {
            const title = $('#title').val()
            const body = $('#body').val()
            const userId = $('#user-id').val()
            AddPost(title, body, userId)
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
    },
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
export default AddPostModal