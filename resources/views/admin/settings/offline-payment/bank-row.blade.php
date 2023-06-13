<div class="modal">
    <table>
        <tr class="item">
            <th scope="row" width="18%">
                <input type="text" name="bank_name[]" value="" class="form-control">
            </th>
            <td width="18%">
                <input type="text" name="bank_branch[]" value="" class="form-control">
            </td>
            <td width="18%">
                <input type="text" name="account_holder_name[]" value="" class="form-control">
            </td>
            <td width="18%">
                <input type="text" name="account_number[]" value="" class="form-control">
            </td>
            <td width="18%">
                <input type="number" name="routing_number[]" value="" class="form-control">
            </td>
            <td width="6%"><button type="button" class="btn btn-icon btn-sm btn-danger remove-menu-row" onclick="$(this).closest('tr').remove();"><i class="bx bx-trash"></i></button></td>
        </tr>
    </table>
</div>
