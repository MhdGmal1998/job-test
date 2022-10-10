import Swal from "sweetalert2"
import { DeletePost } from "../../services"

const Delete = (id: number) => Swal.fire({
    title: 'هل أنت متأكد من أنك تريد حذف هذا المنشور',
    text: "لن تتمكن من استعادة هذا البوست !",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'نعم,  تأكيد الحذف!',
    showLoaderOnConfirm: true,
    cancelButtonText: 'لا، الغاء الحذف',
    allowOutsideClick: () => !Swal.isLoading(),
    preConfirm: () => {
        return new Promise((resolve, reject) => {
            DeletePost(id)
                .then((respone) => {
                    if (respone == 200)
                        Swal.fire(
                            'تم الحذف!',
                            'تم الحذف بنجاح',
                            'success'
                        )
                    else
                        Swal.fire(
                            ' خطأ!',
                            'حصل خطأ غير معروف',
                            'error'
                        )
                    resolve
                })
                .catch((error) => {
                    Swal.fire(
                        ' خطأ!',
                        'حصل خطأ غير معروف',
                        'error'
                    )
                    reject
                })
        })
    }
}).then((result) => {
    if (result.isConfirmed) {
    } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
            'الغاء!',
            'تم الإلغاء',
            'error'
        )
    }

})

export default Delete