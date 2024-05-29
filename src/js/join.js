function sendit(){

    const user_id = document.getElementById('user_id');
    const user_pwd = document.getElementById('user_pwd');
    const user_pwdre = document.getElementById('user_pwdre');
    const name = document.getElementById('name');
    const nickname = document.getElementById('nickname');
    const phone_prefix = document.getElementById('phone_prefix')
    const phone_number = document.getElementById('phone_number');
    const email = document.getElementById('email');

    // 정규 표현식
    const expIdText = /^[A-Za-z]{4,20}$/;
    const expPwText = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const expNameText= /^[가-힣]+$/; // + 반복
    const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
    const expEmailText = /^[A-Za-z-0-9\-\.]+@[A-Ja-z-0-9\-\.]+\.[A-Ja-z-0-9]+$/;


    if(user_id.value ==''){//value가 입력한 값을 의미한다
        alert('아이디를 입력하세요');
        user_id.focus();
        return false
    }

    if(!expIdText.test(user_id.value)){
        alert('아이디는 4자 이상 20자 이하의 대소문자로 시작하는 조합입니다');
        user_id.focus();
        return false
    }

    if(user_pwd.value ==''){
        alert('비밀번호를 입력하세요');
        userpwd.focus();
        return false
    }

    if(!expPwText.test(user_pwd.value)){
        alert('비밀번호 형식확인  \n 소문자,대문자,특수문자,숫자 1개씩 꼽 입력');
        user_pwd.focus();
        return false
    }
    if(user_pwd.value != user_pwdre.value){
        alert('비밀번호가 동일한지 확인하세요')
        user_pwdre.focus();
        return false
    }

    if(!expNameText.test(name.value)){
        alert('이름은 한글로 입력하세요');
        name.focus();
        return false
    }

    if(!expHpText.test(phone_number.value)){
        alert('휴대폰 번호 형식을 확인하세요 \n하이픈(-)을 포함해야 합니다.');
        phone_number.focus();
        return false
    }

    if(!expEmailText.test(email.value)){
        alert('이메일  형식을 확인하세요 \n하이픈(-)을 포함해야 합니다.');
        email.focus();
        return false
    }

    let count = 0;
    for(let i in hobby){
        if(hobby[i].checked){//checked 체크되면 true 아니면 false
            count++;
        }
    }
    if(count == 0){
        alert('취미는 적어도 한개이상 선택하세요');
        return false;
    }

    return true;
}

function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                document.getElementById("sample6_extraAddress").value = extraAddr;

            } else {
                document.getElementById("sample6_extraAddress").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();
}