<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

// public routes
Route::post('/login' , 'Api\AuthController@login');
Route::post('/resetpassword', 'Auth\LoginController@savepasswordreset');

Route::post('/loginSuperAdmin' , 'Api\AuthController@loginSuperAdmin');
Route::get('/iv/{dns}' , 'CapaController@iv');

// private routes
Route::middleware('auth:api')->group(function() {
    Route::post('/logout', 'Api\AuthController@logout')->name('logout');
    Route::get('/licenciamentos', 'Api\AuthController@licenciamentos')->name('licenciamentos');
    Route::post('/licenciamentos', 'Api\AuthController@mudarlic');
    Route::post('/speech', 'SpeechController@speech');
});


// licenciamento
Route::middleware('auth:api')->prefix('licenciamento')->group(function () {
    Route::get('/lista', 'LicenciamentoController@lista');
    Route::post('/store', "LicenciamentoController@store");
    Route::post('/storews', "LicenciamentoController@storews");
    Route::post('/storeiv', "LicenciamentoController@storeiv");
    Route::post('/storegraph', "LicenciamentoController@storegraph");
    Route::post('/deletews', "LicenciamentoController@deletews");
});

// relatorio-grupo
Route::middleware('auth:api')->prefix('relatoriogrupo')->group(function() {
    Route::get('/lista', 'RelatorioGrupoController@lista');
    Route::post('/store', "RelatorioGrupoController@store");
});

//Reports
Route::middleware('auth:api')->prefix('reports')->group(function() {
    Route::get('/lista', 'ReportsController@lista');
    Route::post('/store', "ReportsController@store");
    Route::post('/delete', "ReportsController@delete");
    Route::post('/savefile', "ReportsController@savefile");
    Route::post('/deletefile', "ReportsController@deletefile");
});

//Galeria
Route::middleware('auth:api')->prefix('galeria')->group(function () {
    Route::get('/lista', 'GaleriaController@lista');
    Route::post('/store', "GaleriaController@store");
    Route::post('/delete', "GaleriaController@delete");
});

//usuario
Route::middleware('auth:api')->prefix('usuarios')->group(function () {
    Route::get('/lista', 'usuarioController@lista');
    Route::get('/getPerfilAcesso/{licenciamento_id}', 'usuarioController@perfilacesso');
    Route::post('/store', "UsuarioController@store");
    Route::post('/delete', "UsuarioController@delete");
    Route::post('/storelicenciamento', "UsuarioController@storelicenciamento");
    Route::post('/deletelicenciamento', "UsuarioController@deletelicenciamento");
});


//Perfil Acesso
Route::middleware('auth:api')->prefix('perfilacesso')->group(function () {
    Route::get('/lista', 'PerfilAcessoController@lista');
    Route::post('/store', "PerfilAcessoController@store");
    Route::get('/permissoes/{id}', 'PerfilAcessoController@permissoes');
    Route::post('/permissoes/store', 'PerfilAcessoController@storepermissao');
});

//Dexbord
Route::middleware('auth:api')->prefix('dexbord')->group(function () {
    Route::get('/lista', 'DexbordController@lista');
    Route::post ('/embedded', 'DexbordController@embedded');
    Route::get ('/{id}/reportinfo', 'DexbordController@reportinfo');
    Route::post ('/export', 'DexbordController@export');
    Route::post ('/addfavorite', 'DexbordController@addfavorite');
});

//Dexbord
Route::middleware('auth:api')->prefix('logacesso')->group(function () {
    Route::get('/index', 'RelatorioAcesso@index');
    Route::post('/execute', 'RelatorioAcesso@execute');
});
