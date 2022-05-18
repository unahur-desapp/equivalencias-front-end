import { Grid, TextareaAutosize } from '@mui/material';
import React, { useState } from 'react';
import { Header } from '../../../Header';
import { Titulos } from '../../atoms/Title/Titulos';
import { GridTop } from '../../../GridTop';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BotonMUI } from '../../atoms/Button/BotonMUI';
import { TextField } from '@mui/material';
import { StandardInput } from '../../atoms/Input/InputMUI';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { OuterFormButtons } from '../../../OuterFormButtons';

const columns = [
    { id: 'desc', label: 'Solicitante', minWidth: 170 },
    { id: 'dateTime', label: 'Email', minWidth: 100 },
    { id: 'state', label: 'DNI', minWidth: 170 },
    { id: 'actions', label: 'Fecha', minWidth: 170 },
    { id: 'phone', label: 'Teléfono', minWidth: 170 }
];

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(
        'Josecito',
        'josesito@gmail.com',
        '11111111',
        '14/04/2022',
        '1100000000'
    )
];

const PageRevision = () => {
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleSubmit = async () => {
        console.log('submit');
    };

    return (
        <>
            <Grid container direction="column">
                <Grid item container xs={12}>
                    <Header name="Equivalencias" />
                </Grid>

                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ padding: '40px 0px' }}
                >
                    <GridTop
                        item
                        container
                        xs={11.5}
                        md={7}
                        sx={{
                            padding: '0px 20px'
                        }}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <Titulos component="h2" titulogrande>
                                Revisión
                            </Titulos>
                        </Grid>
                    </GridTop>

                    <GridTop
                        item
                        container
                        blanco
                        xs={11.5}
                        md={7}
                        marginTop={{
                            xs: '30px'
                        }}
                        sx={{
                            height: 'auto'
                        }}
                    >
                        <Paper
                            sx={{
                                width: '100%',
                                overflow: 'hidden',
                                borderRadius: '10px 10px 0px 0px',
                                boxShadow: 'none',
                                borderBottom: '1px solid #dadce0'
                            }}
                        >
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align="center"
                                                    style={{
                                                        minWidth:
                                                            column.minWidth
                                                    }}
                                                    sx={{
                                                        backgroundColor:
                                                            '#FBFBFB',
                                                        padding: '16px 60px'
                                                    }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0
                                                    }
                                                }}
                                            >
                                                <TableCell
                                                    align="center"
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {row.calories}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {row.fat}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {row.carbs}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {row.protein}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>

                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sm={12}
                            padding={{
                                xs: '20px 30px',
                                sm: '20px 60px'
                            }}
                            sx={{
                                height: 'auto',
                                borderRadius: '10px 10px 0px 0px',
                                borderBottom: '1px solid #dadce0'
                            }}
                        >
                            <Grid
                                item
                                container
                                direction="column"
                                alignItems="flex-start"
                                md={12}
                                lg={5.8}
                                sx={{
                                    marginTop: '6px'
                                }}
                            >
                                <Titulos titulolabel component="h2">
                                    Datos Universidad Nacional de Hurlingham
                                </Titulos>
                            </Grid>

                            <Grid
                                item
                                container
                                xs={12}
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                            >
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    alignItems="flex-start"
                                    md={12}
                                    lg={5.8}
                                    sx={{
                                        marginTop: '6px'
                                    }}
                                >
                                    <StandardInput
                                        name="materiaSolicitada"
                                        label="Materia solicitada UNAHUR"
                                        defaultValue="Hello World"
                                        variant="outlined"
                                        size="small"
                                        InputProps={{
                                            readOnly: true
                                        }}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    container
                                    md={12}
                                    lg={5.8}
                                    sx={{
                                        marginTop: '6px'
                                    }}
                                >
                                    <StandardInput
                                        label="Carreras UNAHUR"
                                        defaultValue="Hello World"
                                        variant="outlined"
                                        size="small"
                                        InputProps={{
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* Universidad Origen */}
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sm={12}
                            padding={{
                                xs: '20px 30px',
                                sm: '20px 60px'
                            }}
                            sx={{
                                height: 'auto',
                                borderRadius: '10px 10px 0px 0px',
                                borderBottom: '1px solid #dadce0'
                            }}
                        >
                            <Grid
                                item
                                container
                                direction="column"
                                alignItems="flex-start"
                                md={12}
                                lg={5.8}
                                sx={{
                                    marginTop: '6px'
                                }}
                            >
                                <Titulos titulolabel component="h2">
                                    Datos Universidad de Origen
                                </Titulos>
                            </Grid>

                            <Grid
                                item
                                container
                                xs={12}
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                            >
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    alignItems="flex-start"
                                    md={12}
                                    lg={5.8}
                                    sx={{
                                        marginTop: '6px'
                                    }}
                                >
                                    <StandardInput
                                        name="materiaAprobada"
                                        size="small"
                                        label="Materia aprobada"
                                        defaultValue="Hello World"
                                        variant="outlined"
                                        InputProps={{
                                            readOnly: true
                                        }}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    container
                                    md={12}
                                    lg={5.8}
                                    sx={{
                                        marginTop: '6px'
                                    }}
                                >
                                    <StandardInput
                                        label="Universidad de Origen"
                                        name="universidadOrigen"
                                        defaultValue="Hello World"
                                        variant="outlined"
                                        size="small"
                                        InputProps={{
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                            </Grid>

                            {/* Datos extra */}

                            <Grid
                                item
                                container
                                xs={12}
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                            >
                                <Grid
                                    item
                                    container
                                    md={12}
                                    lg={5.8}
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="flex-start"
                                    sx={{
                                        marginTop: '10px'
                                    }}
                                >
                                    <Grid item container xs={5.6}>
                                        <StandardInput
                                            label="Año aprobación"
                                            name="anioAprobacion"
                                            defaultValue="Hello World"
                                            variant="outlined"
                                            size="small"
                                            InputProps={{
                                                readOnly: true
                                            }}
                                        />
                                    </Grid>

                                    <Grid item container xs={5.6}>
                                        <StandardInput
                                            label="Carga horaria total"
                                            name="cargaHorariaTotal"
                                            defaultValue="Hello World"
                                            variant="outlined"
                                            size="small"
                                            InputProps={{
                                                readOnly: true
                                            }}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    container
                                    md={12}
                                    lg={5.8}
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="flex-start"
                                    sx={{
                                        marginTop: '10px'
                                    }}
                                >
                                    <Grid item container xs={5.6}>
                                        <StandardInput
                                            label="Nota aprobación"
                                            name="notaAprobacion"
                                            defaultValue="Hello World"
                                            variant="outlined"
                                            size="small"
                                            InputProps={{
                                                readOnly: true
                                            }}
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        container
                                        justifyContent="center"
                                        alignItems="flex-end"
                                        xs={5.6}
                                        marginTop="7px"
                                    >
                                        {/* <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{ fontSize: '14px' }}>
                            ¿Tiene certificado?
                        </FormLabel>
                        <RadioGroup
                            required
                            row
                            aria-label="bool"
                            name="certificado"
                            onChange={(event) => handleChangeArray(event, key2)}
                            value={formValueArray.certificado}
                        >
                            <FormControlLabel
                                value={true}
                                control={<Radio size="small" />}
                                label="Si"
                            />
                            <FormControlLabel
                                value={false}
                                control={<Radio size="small" />}
                                label="No"
                            />
                        </RadioGroup>
                    </FormControl> */}
                                        <Typography
                                            variant="body1"
                                            gutterBottom
                                        >
                                            No tiene certificado
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    container
                                    xs={12}
                                    sx={{
                                        marginTop: '16px'
                                    }}
                                >
                                    <Grid item container xs={12}>
                                        <Titulos
                                            titulolabel
                                            variant="h3"
                                            fontSize={{
                                                xs: '14px',
                                                sm: '16px'
                                            }}
                                        >
                                            Adjuntar programa de la materia .pdf
                                        </Titulos>
                                    </Grid>

                                    <Grid
                                        item
                                        container
                                        xs={12}
                                        sx={{ marginTop: '16px' }}
                                    >
                                        <label
                                            htmlFor="contained-button-file"
                                            style={{ width: '100%' }}
                                        >
                                            <BotonMUI
                                                sx={{
                                                    marginRight: '12px'
                                                }}
                                                buttonupload
                                                variant="outlined"
                                                component="span"
                                            >
                                                Cargar
                                            </BotonMUI>
                                            {/* <IconButton
                            sx={{
                                marginRight: '12px'
                            }}
                            buttonupload
                            variant="outlined"
                            component="span"
                        >
                            <AttachFileOutlinedIcon />
                        </IconButton> */}
                                            {/* <FileUploader
                            id="contained-button-file"
                            multiple
                            size="small"
                            variant="standard"
                            type="file"
                            accept="application/pdf, application/vnd.ms-Excel"
                        /> */}
                                        </label>
                                    </Grid>
                                </Grid>

                                {/* <AgregarMateriaUniOrigen /> */}
                            </Grid>
                        </Grid>

                        {/* Textarea */}

                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            sm={12}
                            padding={{
                                xs: '30px 30px',
                                sm: '30px 60px'
                            }}
                            sx={{
                                height: 'auto',
                                borderRadius: '10px 10px 0px 0px'
                            }}
                        >
                            {/* <Grid
                            item
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sm={12}
                            sx={{
                                padding: '0px 0px 20px 0px'
                            }}
                        >
                            <p
                                style={{
                                    color: 'rgba(0, 0, 0, 0.87)',
                                    fontWeight: 500
                                }}
                            >
                                
                                Devolución
                            </p>
                        </Grid> */}

                            <Grid
                                item
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="center"
                                sm={12}
                            >
                                <Grid
                                    item
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    sm={12}
                                >
                                    {/* <TextareaAutosize
                                    style={{
                                        width: '100%',
                                        height: '206px',
                                        resize: 'none',
                                        fontFamily: 'roboto',
                                        fontSize: '16px',
                                        padding: '18px 14px',
                                        background: '#f8f9fa',
                                        borderStyle: 'none',
                                        borderRadius: '5px 0px 0px 0px',
                                        borderBottom: '1px solid #80868b',
                                        outline: 'none'
                                    }}
                                    placeholder="Observación..."
                                /> */}

                                    <TextField
                                        id="filled-basic"
                                        label="Observación..."
                                        variant="filled"
                                        multiline
                                        rows={8}
                                        sx={{
                                            width: '100%'
                                        }}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    sm={12}
                                    sx={{
                                        marginTop: '20px'
                                    }}
                                >
                                    <ToggleButtonGroup
                                        value={alignment}
                                        exclusive
                                        onChange={handleChange}
                                    >
                                        <ToggleButton
                                            color="primary"
                                            value="aceptar"
                                        >
                                            Aceptar
                                        </ToggleButton>
                                        <ToggleButton value="masinfo">
                                            Mas información
                                        </ToggleButton>
                                        <ToggleButton
                                            color="error"
                                            value="rechazar"
                                        >
                                            Rechazar
                                        </ToggleButton>
                                    </ToggleButtonGroup>

                                    {/* <BotonMUI
                                    buttoncontainedsmall
                                    sx={{
                                        background: '#009673',
                                        '&:hover': {
                                            background: '#007A5E'
                                        }
                                        // background: '#348FDC',
                                        // '&:hover': {
                                        //     background: '#2380D1'
                                        // }
                                        // marginBottom: '10px'
                                    }}
                                >
                                    Aceptar
                                </BotonMUI>

                                <BotonMUI
                                    buttoncontainedsmall
                                    sx={{
                                        background: '#ffa726',
                                        '&:hover': {
                                            background: '#f57c00'
                                        },
                                        marginLeft: '14px',
                                        marginRight: '14px'
                                    }}
                                >
                                    Revisar
                                </BotonMUI>

                                <BotonMUI
                                    buttoncontainedsmall
                                    sx={{
                                        background: '#E74924',
                                        '&:hover': {
                                            background: '#CA3716'
                                        }
                                    }}
                                >
                                    Rechazar
                                </BotonMUI> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </GridTop>
                    <OuterFormButtons
                        handleSubmit={handleSubmit}
                        path={'/direccion/solicitudes'}
                        titulo={'Descartar revisión'}
                        mensaje={
                            '¿Está seguro/a de que desea descartar la revisión de la solicitud?'
                        }
                    />
                </Grid>
            </Grid>
        </>
    );
};

export { PageRevision };
