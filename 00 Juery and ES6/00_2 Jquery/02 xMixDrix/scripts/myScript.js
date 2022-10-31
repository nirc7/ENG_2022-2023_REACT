var x = true;
var sumX = 0;
var sumY = 0;
var steps = 0;
$(document).ready(function () {
    bindDivs();

    $('button').click(function () {
        $('div').removeClass("user1 user2");
        x = true;
        sumX = 0;
        sumY = 0;
        steps = 0;
        $('#player').text('');
        $('#player').css({
            'background-color': 'White',
            'color': 'Black'
        });
        bindDivs();
    });

    function bindDivs() {
        $('div').click(function () {
            if (x && !$(this).hasClass('user1') && !$(this).hasClass('user2')) {
                //alert( $(this).attr('id') );
                $(this).toggleClass('user1');
                $('div').removeClass('last');
                $(this).addClass('last');
                x = false;
                sumX += parseInt($(this).attr('id'));
                steps++;
                $('#player').text('The Black Turn');
                if (steps == 5) {
                    $('#player').text('There is a Tie Score!');
                    $('div').unbind();
                }
            }
            else if (!x && !$(this).hasClass('user1') && !$(this).hasClass('user2')) {
                $(this).toggleClass('user2');
                $('div').removeClass('last');
                $(this).addClass('last');
                x = true;
                sumY += parseInt($(this).attr('id'));
                $('#player').text('The Orange Turn');
            }
            else if (!x && $(this).hasClass('user1') && $(this).hasClass('last')) {
                $(this).removeClass("user1 user2");
                x = true;
                sumX -= parseInt($(this).attr('id'));
                $('#player').text('The Orange Turn');
                steps--;
            }
            else if (x && $(this).hasClass('user2') && $(this).hasClass('last')) {
                $(this).removeClass("user1 user2");
                x = false;
                sumY -= parseInt($(this).attr('id'));
                $('#player').text('The Black Turn');
            }
            checkWin();
        });
    }

    function checkWin() {
        if ((sumX & 7) == 7 || (sumX & 56) == 56 || (sumX & 448) == 448) {
            $('#player').css('background-color', 'Orange');
            $('#player').text('The Orange Wins through ROWS!!!');
            $('div').unbind();
        }
        else if ((sumX & 73) == 73 || (sumX & 146) == 146 || (sumX & 292) == 292) {
            $('#player').css('background-color', 'Orange');
            $('#player').text('The Orange Wins through COLS!!!');
            $('div').unbind();
        }
        else if ((sumX & 273) == 273 || (sumX & 84) == 84) {
            $('#player').css('background-color', 'Orange');
            $('#player').text('The Orange Wins through DIAGONAL!!!');
            $('div').unbind();
        }
        if ((sumY & 7) == 7 || (sumY & 56) == 56 || (sumY & 448) == 448) {
            $('#player').css({
                'background-color': 'Black',
                'color': 'White'
            });
            $('#player').text('The Black Wins through ROWS!!!');
            $('div').unbind();
        }
        else if ((sumY & 73) == 73 || (sumY & 146) == 146 || (sumY & 292) == 292) {
            $('#player').css({
                'background-color': 'Black',
                'color': 'White'
            });
            $('#player').text('The Black Wins through COLS!!!');
            $('div').unbind();
        }
        else if ((sumY & 273) == 273 || (sumY & 84) == 84) {
            $('#player').css(
                    {
                        'background-color': 'Black',
                        'color': 'White'
                    });
            $('#player').text('The Black Wins through DIAGONAL!!!');
            $('div').unbind();
        }
    }
});