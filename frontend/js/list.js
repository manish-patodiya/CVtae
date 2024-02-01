$("span").on("click", function () {
  $(".chip").removeClass("active");
  $(this).addClass("active");
});

arr = [
  {
    img: "DEEPAK.jpg",
    name: "Deepak Saini",
    email: "ys3434@gmail.com",
    phone: "960206535",
    skills: "java, web, spring",
    dob: "09/04/2002",
  },
];

function make_row(obj) {
  return `<tr>
            <td><img src="default.jpg" alt class="image-cover"></div></td>
            <td>
                <p class="font-weight-bold mb-0">${
                  obj.fname + " " + obj.lname
                }</p>
                <p class="text-muted mb-0">${
                  obj.fname + Math.round(Math.random(0, 1) * 100)
                }@gmail.com</p></a>
            </td>
            <td>${obj.Gender}</td>
            <td>${obj.Skillls}</td>
            <td>${obj.DOB}</td>
            <td>
                <div class="badge badge-success badge-success-alt">${
                  obj.City + ", " + obj.State
                }</div>
            </td>
        </tr>`;
}

getdetalis("all");

let table;
function getdetalis(name) {
  $.ajax({
    url: "http://localhost:5000/",
    type: "GET",
    data: { key: name },
    dataType: "json",
    success: function (list) {
      let div = "";
      list.map((obj) => (div += make_row(obj)));
      if ($.fn.dataTable.isDataTable("#tbl-emp")) {
        table.clear();
        table.destroy();
      }

      $("#tbl-emp>tbody").html(div);
      table = $("#tbl-emp").DataTable({
        destroy: true,
        columnDefs: [
          {
            render: function (data, type, full, meta) {
              return "<div class='text-wrap width-200'>" + data + "</div>";
            },
            targets: 3,
          },
        ],
      });
    },
    error: function (error) {
      console.log(name);
    },
  });
}
