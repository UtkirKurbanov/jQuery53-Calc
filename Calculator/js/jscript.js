function insrt(num){
    $('.calc__display').val($('.calc__display').val()+num);
}

function eql(){
    $('.calc__display').val(eval($('.calc__display').val()));
}

function c(){
    $('.calc__display').val('');
}

function del(){
    value = $('.calc__display').val();
    $('.calc__display').val(value.substring(0, value.length - 1));
}