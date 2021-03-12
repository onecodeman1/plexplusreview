$('#brownlounge').hover(
				function() {
						$('#mapimage img').attr('src', 'background.png');
						//alert('over');
				},
				function() {
						$('#mapimage img').attr('src', '/imagess/mao.png');
						//alert('out');
				}
		);
