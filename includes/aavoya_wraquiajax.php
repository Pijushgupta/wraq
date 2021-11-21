<?php
if (!defined('ABSPATH')) {
	exit;
}
/* 
Having all the ajax handling methods
*/


/**
 * get_new_button_data
 * This to provide data for newly created buttons
 * returns json data
 */
function get_new_button_data()
{
	if (isset($_POST)) {
		$nonce = $_POST['nonce'];
		if (wp_verify_nonce($nonce, 'awraq_nonce')) {


			/**
			 * getting all the contact 7 forms 
			 */
			$formatted_forms = aavoya_wraqgc7fl();

			/**
			 * creating a button(post) and getting the ID back
			 */
			$aavoya_wraqsci = aavoya_wraqcous();


			/**
			 * adding global style to the newly created button via the below function
			 */
			aavoya_apply_global_style(aavoya_wraqsci);


			$data = array(

				'id' => intval($aavoya_wraqsci),
				'short_code' => '[awraqsci id="' . $aavoya_wraqsci . '"]',
				'forms' => $formatted_forms,
				'style' => aavoya_gpm($aavoya_wraqsci)

			);

			$data = json_encode($data);
			echo $data;
			wp_die();
		}
	}
}
add_action('wp_ajax_get_new_button_data', 'get_new_button_data');


/**
 * get all shortcodes
 *
 */
function get_all_shortcodes()
{
	if (isset($_POST)) {
		$nonce = $_POST['nonce'];
		if (wp_verify_nonce($nonce, 'awraq_nonce')) {

			$data = json_encode(aavoya_wraqgap());
			echo $data;
			wp_die();
		}
	}
}
add_action('wp_ajax_get_all_shortcodes', 'get_all_shortcodes');


/**
 * show_hide_form_area
 * This to get and send option data for form switch toggle button
 * */
function show_hide_form_area()
{
	if (isset($_POST)) {
		$nonce = $_POST['nonce'];
		if (wp_verify_nonce($nonce, 'awraq_nonce')) {

			$belongsto = sanitize_text_field($_POST['belongsto']);
			$optionData = get_option($belongsto);
			if ($optionData) {
				echo json_encode(array($optionData));
				wp_die();
			}
		}
		echo json_encode(array(false));
		wp_die();
	}
}
add_action('wp_ajax_show_hide_form_area', 'show_hide_form_area');


/**
 * update_form_toggle_infomation
 * This to update option data of toggle buttons
 */
function update_form_toggle_infomation()
{
	if (isset($_POST)) {
		$nonce = $_POST['nonce'];
		if (wp_verify_nonce($nonce, 'awraq_nonce')) {
			//Sanitize Post data
			$belongsto = sanitize_text_field($_POST['belongsto']);
			$state = rest_sanitize_boolean($_POST['state']);

			if ($belongsto == 'wo') {
				update_option('wraqwo', $state, false);
			}
			if ($belongsto == 'wp') {
				update_option('wraqwp', $state, false);
			}
			echo json_encode(array(true));
			wp_die();
		}

		echo json_encode(array(false));
		wp_die();
	}
}
add_action('wp_ajax_update_form_toggle_infomation', 'update_form_toggle_infomation');


/**
 * save_button_data
 * Receiving the button setting data and saving them 
 */

function save_button_data()
{
	if (isset($_POST)) {
		$nonce = $_POST['nonce'];
		if (wp_verify_nonce($nonce, 'awraq_nonce')) {

			$id = intval($_POST['nodeid']);

			$data = array(


				//TODO: add global data in-case no data provided by use


				'contact7form'		=> ($_POST['contact7form']) ? intval($_POST['contact7form']) : null,
				'borderradiusvalue'	=> ($_POST['borderradius']) ? intval($_POST['borderradius']) : null,
				'paddingxvalue'		=> ($_POST['paddingx']) ? intval($_POST['paddingx']) : null,
				'paddingyvalue'		=> ($_POST['paddingy']) ? intval($_POST['paddingy']) : null,
				'buttonbgcolor'		=> ($_POST['buttonbgcolor']) ? sanitize_hex_color($_POST['buttonbgcolor']) : null,
				'buttontextcolor'	=> ($_POST['buttontextcolor']) ? sanitize_hex_color($_POST['buttontextcolor']) : null,
				'buttontext'		=> ($_POST['buttontext']) ? sanitize_text_field($_POST['buttontext']) : null,
				'buttontracking'	=> ($_POST['buttontracking']) ? intval($_POST['buttontracking']) : null,
				'buttonfontsize'	=> ($_POST['buttonfontsize']) ? intval($_POST['buttonfontsize']) : null,
				'buttoncssclass'	=> (($_POST['buttoncssclass'])) ? sanitize_html_class($_POST['buttoncssclass']) : null

			);


			$reply = aavoya_wraqap($id, $data);
			echo json_encode($reply);
			wp_die();
		}
	}
}
add_action('wp_ajax_save_button_data', 'save_button_data');


/**
 * delete_button_data
 * it will delete a Button and all of data that related to that button
 */
function delete_button_data()
{
	if (isset($_POST)) {
		$nonce = $_POST['nonce'];
		if (wp_verify_nonce($nonce, 'awraq_nonce')) {
			$id = intval($_POST['nodeid']);
			$reply = aavoya_wraqdp($id);
			echo json_encode($reply);
			wp_die();
		}
	}
}
add_action('wp_ajax_delete_button_data', 'delete_button_data');



/**
 * get_all_products
 * it will provide all the products as ajax response
 */
function get_all_products()
{
	if (isset($_POST)) {
		$nonce = $_POST['nonce'];
		if (wp_verify_nonce($nonce, 'awraq_nonce')) {
			if (aavoyaWooCom == true) {
				$products = aavoya_wraqwop();
				echo json_encode($products);
				wp_die();
			} else {
				echo json_encode(array(false));
				wp_die();
			}
		}
	}
}
add_action('wp_ajax_get_all_products', 'get_all_products');

/**
 * save_button_as_product_meta
 * it will save button id to product meta
 */
function save_button_as_product_meta()
{
	if (isset($_POST)) {

		$nonce = $_POST['nonce'];
		$productid = intval($_POST['productid']);
		$buttonid = intval($_POST['buttonid']);
		$buttonstatus = rest_sanitize_boolean($_POST['status']);


		if (wp_verify_nonce($nonce, 'awraq_nonce')) {

			$data = array(
				'buttonid' => $buttonid,
				'buttonstatus' => $buttonstatus
			);

			$status = aavoya_waraqspm($productid, $data);
			echo json_encode(array($status));
			wp_die();
		} else {
			echo json_encode(array(false));
			wp_die();
		}
	}
}
add_action('wp_ajax_save_button_as_product_meta', 'save_button_as_product_meta');


/**
 * save_global_setting
 * its will handle ajax request to save global data for for button styling 
 * @return boolean true if success
 */
function save_global_setting()
{

	if (isset($_POST) && wp_verify_nonce($_POST['nonce'], 'awraq_nonce')) {

		$globaldata = array();

		/**
		 * Sanitizing the data going to database as options
		 */


		$globaldata['globalBgColor'] 		= ($_POST['globaldata']['globalBgColor']) ? sanitize_hex_color($_POST['globaldata']['globalBgColor']) : null;
		$globaldata['globalTextColor']		= ($_POST['globaldata']['globalTextColor']) ? sanitize_hex_color($_POST['globaldata']['globalTextColor']) : null;
		$globaldata['globalBorderRadius']	= ($_POST['globaldata']['globalBorderRadius']) ? intval($_POST['globaldata']['globalBorderRadius']) : null;
		$globaldata['globalPaddingX']		= ($_POST['globaldata']['globalPaddingX']) ? intval($_POST['globaldata']['globalPaddingX']) : null;
		$globaldata['globalPaddingY']		= ($_POST['globaldata']['globalPaddingY']) ? intval($_POST['globaldata']['globalPaddingY']) : null;
		$globaldata['globalFontSize']		= ($_POST['globaldata']['globalFontSize']) ? intval($_POST['globaldata']['globalFontSize']) : null;
		$globaldata['globalTracking']		= ($_POST['globaldata']['globalTracking']) ? intval($_POST['globaldata']['globalTracking']) : null;
		$globaldata['globalText']			= ($_POST['globaldata']['globalText']) ? sanitize_text_field($_POST['globaldata']['globalText']) : null;
		$globaldata['globalCssClass']		= ($_POST['globaldata']['globalCssClass']) ? sanitize_html_class($_POST['globaldata']['globalCssClass']) : null;


		/**
		 * this sending either TRUE on successful update else False
		 * 
		 * no need to send this back to the frontend But this might be in use in future for feature addition 
		 */
		echo json_encode(aavoya_add_global_settings_data($globaldata));

		wp_die();
	}
}
add_action('wp_ajax_save_global_setting', 'save_global_setting');


/**
 * get_global_setting
 * it will provide global data for button styling
 * @return void
 */
function get_global_setting()
{
	if (isset($_POST)) {

		$nonce = $_POST['nonce'];

		if (wp_verify_nonce($nonce, 'awraq_nonce')) {
			echo json_encode(aavoya_get_global_data());
			wp_die();
		}
	}
}
add_action('wp_ajax_get_global_setting', 'get_global_setting');
