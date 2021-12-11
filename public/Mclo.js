// 메인에서 받아오는 날씨랑 기온
var lastData = localStorage.getItem('weather');
var lastTemp = localStorage.getItem('tempC');

// 옷이름
const mHatCloth = document.querySelector('.clothName1');
const mTop1Cloth = document.querySelector('.clothName2');
const mTop2Cloth = document.querySelector('.clothName3');
const mBottomCloth = document.querySelector('.clothName4');
const mShose = document.querySelector('.clothName5');


window.addEventListener('load',()=>{
    document.getElementById("link1").href = "https://search.shopping.naver.com/search/all?query=%EB%AC%BC%EB%B3%91&cat_id=&frm=NVSHATC";
        if (lastData === 'Clear'){
            if(-20<lastTemp<5){
                mHatCloth.textContent = '털모자';
                mTop1Cloth.textContent='롱패딩';
                mTop2Cloth.textContent='니트';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                mHatCloth.textContent = '모자';
                mTop1Cloth.textContent='코트';
                mTop2Cloth.textContent='맨투맨';
                mBottomCloth.textContent='조거팬츠';
                mShose.textContent='운동화';
            }
            else if (9<=lastTemp<12){
                mHatCloth.textContent = '트렌치코트';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='슬랙스';
                mShose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                mHatCloth.textContent = '자켓';
                mTop1Cloth.textContent='긴팔 면티';
                mTop2Cloth.textContent='백팩';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='맨투맨';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='면바지';
                mShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='린넨 셔츠';
                mTop2Cloth.textContent='얇은 반팔';
                mBottomCloth.textContent='린넨 바지';
                mShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='반팔티';
                mTop2Cloth.textContent='에코백';
                mBottomCloth.textContent='청바지';
                mShose.textContent='쪼리';
            }                      
        }
        else if (lastData === 'Rain'){
            if(-20<lastTemp<5){
                mHatCloth.textContent = '털모자';
                mTop1Cloth.textContent='롱패딩';
                mTop2Cloth.textContent='니트';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                mHatCloth.textContent = '모자';
                mTop1Cloth.textContent='코트';
                mTop2Cloth.textContent='맨투맨';
                mBottomCloth.textContent='조거팬츠';
                mShose.textContent='운동화';
            }
            else if (9<=lastTemp<12){
                mHatCloth.textContent = '트렌치코트';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='슬랙스';
                mShose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                mHatCloth.textContent = '자켓';
                mTop1Cloth.textContent='긴팔 면티';
                mTop2Cloth.textContent='백팩';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='맨투맨';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='면바지';
                mShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='린넨 셔츠';
                mTop2Cloth.textContent='얇은 반팔';
                mBottomCloth.textContent='린넨 바지';
                mShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='반팔티';
                mTop2Cloth.textContent='에코백';
                mBottomCloth.textContent='청바지';
                mShose.textContent='쪼리';
            } 
         }
         else if (lastData === 'Clouds'){
            if(-20<lastTemp<5){
                mHatCloth.textContent = '털모자';
                mTop1Cloth.textContent='롱패딩';
                mTop2Cloth.textContent='니트';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                mHatCloth.textContent = '모자';
                mTop1Cloth.textContent='코트';
                mTop2Cloth.textContent='맨투맨';
                mBottomCloth.textContent='조거팬츠';
                mShose.textContent='운동화';
            }
            else if (9<=lastTemp<12){
                mHatCloth.textContent = '트렌치코트';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='슬랙스';
                mShose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                mHatCloth.textContent = '자켓';
                mTop1Cloth.textContent='긴팔 면티';
                mTop2Cloth.textContent='백팩';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='맨투맨';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='면바지';
                mShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='린넨 셔츠';
                mTop2Cloth.textContent='얇은 반팔';
                mBottomCloth.textContent='린넨 바지';
                mShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='반팔티';
                mTop2Cloth.textContent='에코백';
                mBottomCloth.textContent='청바지';
                mShose.textContent='쪼리';
            } 
         }
         else if (lastData === 'Drizzle'){
            if(-20<lastTemp<5){
                mHatCloth.textContent = '털모자';
                mTop1Cloth.textContent='롱패딩';
                mTop2Cloth.textContent='니트';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                mHatCloth.textContent = '모자';
                mTop1Cloth.textContent='코트';
                mTop2Cloth.textContent='맨투맨';
                mBottomCloth.textContent='조거팬츠';
                mShose.textContent='운동화';
            }
            else if (9<=lastTemp<12){
                mHatCloth.textContent = '트렌치코트';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='슬랙스';
                mShose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                mHatCloth.textContent = '자켓';
                mTop1Cloth.textContent='긴팔 면티';
                mTop2Cloth.textContent='백팩';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='맨투맨';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='면바지';
                mShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='린넨 셔츠';
                mTop2Cloth.textContent='얇은 반팔';
                mBottomCloth.textContent='린넨 바지';
                mShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='반팔티';
                mTop2Cloth.textContent='에코백';
                mBottomCloth.textContent='청바지';
                mShose.textContent='쪼리';
            }   
         }
         else if (lastData === 'Snow'){
            if(-20<lastTemp<5){
                mHatCloth.textContent = '털모자';
                mTop1Cloth.textContent='롱패딩';
                mTop2Cloth.textContent='니트';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                mHatCloth.textContent = '모자';
                mTop1Cloth.textContent='코트';
                mTop2Cloth.textContent='맨투맨';
                mBottomCloth.textContent='조거팬츠';
                mShose.textContent='운동화';
            }
            else if (9<=lastTemp<12){
                mHatCloth.textContent = '트렌치코트';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='슬랙스';
                mShose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                mHatCloth.textContent = '자켓';
                mTop1Cloth.textContent='긴팔 면티';
                mTop2Cloth.textContent='백팩';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='맨투맨';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='면바지';
                mShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='린넨 셔츠';
                mTop2Cloth.textContent='얇은 반팔';
                mBottomCloth.textContent='린넨 바지';
                mShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='반팔티';
                mTop2Cloth.textContent='에코백';
                mBottomCloth.textContent='청바지';
                mShose.textContent='쪼리';
            } 
         }
      
})


